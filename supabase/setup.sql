-- Run this SQL in your Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)

-- 1. Create the bookings table
create table if not exists bookings (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  email text,
  date date,
  time time,
  details text
);

-- 2. Enable Row Level Security (RLS)
alter table bookings enable row level security;

-- 3. Create a policy to allow anyone to insert bookings
-- (This is useful for a public booking form)
create policy "Allow public inserts" 
on bookings for insert 
with check (true);

-- 4. Create a policy to allow authenticated users to view bookings
-- (This allows you to see them in your dashboard later)
create policy "Allow authenticated users to view" 
on bookings for select 
using (auth.role() = 'authenticated');

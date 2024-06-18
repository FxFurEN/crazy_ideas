CREATE TABLE IF NOT EXISTS delivery_table (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    service_type TEXT NOT NULL,
    time_reserved TIMESTAMP WITH TIME ZONE NOT NULL
);
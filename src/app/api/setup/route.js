import { NextResponse } from 'next/server';
import pool from '@/config/database';

export async function GET() {
  try {
    // Buat tabel users jika belum ada
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) DEFAULT 'user',
        department VARCHAR(100),
        position VARCHAR(100),
        phone VARCHAR(20),
        address TEXT,
        profile_image VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    return NextResponse.json({
      status: 'success',
      message: 'Database setup completed'
    });
  } catch (error) {
    console.error('Database setup error:', error);
    return NextResponse.json({
      status: 'error',
      message: error.message
    }, { status: 500 });
  }
} 
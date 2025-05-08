import { NextResponse } from 'next/server';
const pool = require('@/config/database');

export async function GET() {
  try {
    // Test koneksi database dengan query sederhana
    const client = await pool.connect();
    try {
      const result = await client.query('SELECT 1 as test');
      return NextResponse.json({
        status: 'success',
        message: 'Database connection successful',
        test: result.rows[0].test,
        config: {
          host: process.env.POSTGRES_HOST,
          port: process.env.POSTGRES_PORT,
          database: process.env.POSTGRES_DATABASE,
          user: process.env.POSTGRES_USER,
          hasPassword: !!process.env.POSTGRES_PASSWORD
        }
      });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      status: 'error',
      message: error.message,
      stack: error.stack,
      config: {
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        database: process.env.POSTGRES_DATABASE,
        user: process.env.POSTGRES_USER,
        hasPassword: !!process.env.POSTGRES_PASSWORD
      }
    }, { status: 500 });
  }
} 
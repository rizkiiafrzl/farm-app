import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

export async function PUT(request) {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('auth-token');

    if (!token) {
      return NextResponse.json(
        { error: 'Not authenticated' },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token.value, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { name, email, phone, address, position, department } = await request.json();

    // Validasi input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Cek apakah email sudah digunakan oleh user lain
    const existingUser = await sql`
      SELECT id FROM users 
      WHERE email = ${email} AND id != ${userId}
    `;

    if (existingUser.rows.length > 0) {
      return NextResponse.json(
        { error: 'Email already in use' },
        { status: 400 }
      );
    }

    // Update user data
    const result = await sql`
      UPDATE users 
      SET 
        name = ${name},
        email = ${email},
        phone = ${phone || null},
        address = ${address || null},
        position = ${position || null},
        department = ${department || null}
      WHERE id = ${userId}
      RETURNING id, name, email, role, department, position, phone, address, profile_image, created_at
    `;

    const user = result.rows[0];

    return NextResponse.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        department: user.department,
        position: user.position,
        phone: user.phone,
        address: user.address,
        profileImage: user.profile_image,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    console.error('Update profile error:', error);
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    );
  }
} 
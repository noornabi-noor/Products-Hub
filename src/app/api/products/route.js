// src/app/api/products/route.js
import { DbConnect } from "@/lib/DbConnect";

// GET: Fetch latest 3 products
export async function GET() {
  try {
    const collection = await DbConnect("products");

    const products = await collection
      .find()
      .sort({ createdAt: -1 })
      .toArray();

    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch products" }),
      { status: 500 }
    );
  }
}

// POST: Add a new product
export async function POST(req) {
  try {
    const body = await req.json();
    const collection = await DbConnect("products");

    const result = await collection.insertOne({
      name: body.name,
      img: body.img,
      description: body.description,
      price: parseFloat(body.price),
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: result.insertedId }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to add product" }),
      { status: 500 }
    );
  }
}

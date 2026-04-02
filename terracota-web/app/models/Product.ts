import mongoose from 'mongoose';

export interface IProduct {
  name: string;
  category: string;
  stock: number;
  description?: string;
  image?: string;
  tags?: string[];
}

const ProductSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true, min: 0 },
  description: { type: String },
  image: { type: String },
  tags: { type: [String] },
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);

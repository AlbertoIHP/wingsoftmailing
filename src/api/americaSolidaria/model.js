import mongoose, { Schema } from 'mongoose'

const americaSolidariaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email:
  {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

americaSolidariaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      name: this.name,
      id: this.id,
      email: this.email,
    }

    return full ? {
      ...view,
      createdBy_id: this.createdBy_id,
      updatedAt: this.updatedAt
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('AmericaSolidaria', americaSolidariaSchema)

export const schema = model.schema
export default model

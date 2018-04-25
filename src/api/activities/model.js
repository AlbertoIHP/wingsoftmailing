import mongoose, { Schema } from 'mongoose'

const activitiesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bussinessName:
  {
    type: String,
    required: true
  },
  bussinessArea:
  {
    type: String,
    required: true
  },
  email:
  {
    type: String,
    required: true
  },
  topic:
  {
    type: String,
    required: true
  },
  phone:
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

activitiesSchema.methods = {
  view (full) {
    const view = {
      // simple view
      name: this.name,
      id: this.id,
      bussinessName: this.bussinessName,
      bussinessArea: this.bussinessArea,
      email: this.email,
      topic: this.topic,
      phone: this.phone,
      createdAt: this.createdAt,
    }

    return full ? {
      ...view,
      createdBy_id: this.createdBy_id,
      updatedAt: this.updatedAt
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Activities', activitiesSchema)

export const schema = model.schema
export default model

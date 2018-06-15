import mongoose, { Schema } from 'mongoose'

const dbDefensa = new Schema({
  juzgado: {
    type: String,
    required: true
  },
  procurador:
  {
    type: String,
    required: true
  },
  rol:
  {
    type: String,
    required: true
  },
  caratulado:
  {
    type: String,
    required: true
  },
  cliente:
  {
    type: String,
    required: true
  },
  fecha_ingreso:
  {
    type: String,
    required: true
  },
  estado:
  {
    type: String,
    required: true
  },
  url_causa:
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

dbDefensa.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
	  juzgado: this.juzgado, 
	  procurador: this.procurador, 
	  rol: this.rol, 
	  caratulado: this.caratulado, 
	  cliente: this.cliente, 
	  fecha_ingreso: this.fecha_ingreso, 
	  estado: this.estado,
	  url_causa: this.url_causa
    }

    return full ? {
      ...view,
      createdBy_id: this.createdBy_id,
      updatedAt: this.updatedAt
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('dbDefensa', dbDefensa)

export const schema = model.schema
export default model

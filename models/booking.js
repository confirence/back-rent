import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
   {
      checkInDate: {
         type: Date,
         required: true,
      },
      checkOutDate: {
         type: Date,
         required: true,
      },
      contactInfo: {
         fullName: {
            type: String,
            required: true,
         },
         email: {
            type: String,
            required: true,
         },
         phoneNumber: {
            type: String,
            required: true,
         },
      },
      guests: [
         {
            fullName: {
               type: String,
               required: false,
            },
         },
      ],
      title: {
         type: String,
         required: true,
      },
      tags: {
         type: Array,
         required: true,
      },
   },
   {
      timestamps: true,
   },
);

const BookingModel = mongoose.model('Booking', BookingSchema);

export default BookingModel;

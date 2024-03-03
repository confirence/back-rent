export const BookingController = {
   handleBooking: (req, res) => {
      const bookingData = req.body;
      // Ваш код обработки данных о бронировании
      console.log('Данные о бронировании с клиента:', bookingData);

      // Отправка ответа об успешном выполнении
      res.json({ message: 'Бронирование успешно обработано на сервере' });
   },
};

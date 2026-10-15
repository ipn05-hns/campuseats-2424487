const vendors = [
  {
    id: 'kafe-ali',
    name: 'Kafe Mahallah Ali',
    location: 'Mahallah Ali, Block C',
    openHours: '7:00 am - 10:00 pm',
    isOpen: true,
    menu: [
      { id: 'ali-1', name: 'Nasi Lemak Ayam', description: 'Coconut rice with chicken', price: 7.5, category: 'Rice', available: true },
      { id: 'ali-2', name: 'Nasi Goreng Kampung', description: 'Spicy fried rice with anchovies', price: 6.5, category: 'Rice', available: true },
      { id: 'ali-3', name: 'Mee Goreng Mamak', description: 'Fried yellow noodles', price: 6.0, category: 'Noodles', available: true },
      { id: 'ali-4', name: 'Kuey Teow Goreng', description: 'Flat rice noodles stir-fry', price: 6.0, category: 'Noodles', available: true },
      { id: 'ali-5', name: 'Roti Canai Telur', description: 'Flaky flatbread with egg', price: 3.0, category: 'Roti', available: true },
      { id: 'ali-6', name: 'Roti Bom', description: 'Sweet thick flatbread', price: 3.5, category: 'Roti', available: false },
      { id: 'ali-7', name: 'Teh Tarik', description: 'Hot pulled tea', price: 2.5, category: 'Drinks', available: true },
      { id: 'ali-8', name: 'Milo Ais', description: 'Iced chocolate malt drink', price: 3.5, category: 'Drinks', available: true }
    ]
  },
  {
    id: 'kafe-aminah',
    name: 'Kafe Mahallah Aminah',
    location: 'Mahallah Aminah, Ground Floor',
    openHours: '8:00 am - 9:00 pm',
    isOpen: true,
    menu: [
      { id: 'am-1', name: 'Laksa Johor', description: 'Spicy fish gravy spaghetti', price: 8.0, category: 'Noodles', available: true },
      { id: 'am-2', name: 'Air Bandung', description: 'Rose syrup with milk', price: 3.0, category: 'Drinks', available: true }
    ]
  },
  {
    id: 'kafe-faruq',
    name: 'Kafe Mahallah Faruq',
    location: 'Mahallah Faruq, Block B',
    openHours: '6:00 pm - 1:00 am',
    isOpen: false,
    menu: [
      { id: 'fq-1', name: 'Burger Ayam Special', description: 'Chicken burger with fried egg', price: 7.0, category: 'Western', available: true }
    ]
  }
]; //

export default vendors;
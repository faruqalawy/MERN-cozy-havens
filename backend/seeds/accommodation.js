import mongoose from "mongoose";
import Category from "../models/categoryModel.js";
import MostPicked from "../models/mostPickedModel.js";

mongoose
    .connect('mongodb://localhost:27017/cozyhavens')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
    });

async function seed() {
  const mostPicked = [
    {
      name: "Beach Villa Fam",
      type: "Apartment",
      imageUrl: "cozy-havens/images/mostpicked-main",
      country: "Indonesia",
      city: "Parangtritis, Yogyakarta",
      price: "35",
      unit: "night",
    },
    {
      name: "Royal Vintage",
      type: "Apartment",
      imageUrl: "cozy-havens/images/mostpicked-1",
      country: "Indonesia",
      city: "Malioboro, Yogyakarta",
      price: "50",
      unit: "night",
    },
    {
      name: "The Heritage",
      type: "Apartment",
      imageUrl: "cozy-havens/images/mostpicked-2",
      country: "Indonesia",
      city: "Prambanan, Yogyakarta",
      price: "28",
      unit: "night",
    },
    {
      name: "Nature Hill",
      type: "Apartment",
      imageUrl: "cozy-havens/images/mostpicked-3",
      country: "Indonesia",
      city: "Kaliurang, Yogyakarta",
      price: "30",
      unit: "night",
    },
    {
      name: "Secret Borobudur",
      type: "Apartment",
      imageUrl: "cozy-havens/images/mostpicked-4",
      country: "Indonesia",
      city: "Kulonprogo, Yogyakarta",
      price: "20",
      unit: "night",
    },
  ];

  const categories = [
    {
      name: "House with beauty backyard",
      items: [
        {
          name: "Bobox",
          imageUrl: "cozy-havens/images/categories-1",
          country: "Indonesia",
          city: "Bantul, Yogyakarta",
          isPopular: true,
          price: "35"
        },
        {
          name: "Emerald Villa",
          imageUrl: "cozy-havens/images/categories-2",
          country: "Indonesia",
          city: "Gunung Kidul, Yogyakarta",
          isPopular: false,
          price: "50"
        },
        {
          name: "Ameena House",
          imageUrl: "cozy-havens/images/categories-3",
          country: "Indonesia",
          city: "Kaliurang, Yogyakarta",
          isPopular: false,
          price: "28"
        },
        {
          name: "Mandala Homestay",
          imageUrl: "cozy-havens/images/categories-4",
          country: "Indonesia",
          city: "Kulonprogo, Yogyakarta",
          isPopular: false,
          price: "30"
        }
      ]
    },
    {
      name: "Hotel with large living room",
      items: [
        {
          name: "Royal Ambarrukmo",
          imageUrl: "cozy-havens/images/categories-5",
          country: "Indonesia",
          city: "Sleman, Yogyakarta",
          isPopular: false,
          price: "45"
        },
        {
          name: "Grand Emerald",
          imageUrl: "cozy-havens/images/categories-6",
          country: "Indonesia",
          city: "Sapen, Yogyakarta",
          isPopular: false,
          price: "60"
        },
        {
          name: "Edge Treasure",
          imageUrl: "cozy-havens/images/categories-7",
          country: "Indonesia",
          city: "Malioboro, Yogyakarta",
          isPopular: false,
          price: "55"
        },
        {
          name: "Secret Garden",
          imageUrl: "cozy-havens/images/categories-8",
          country: "Indonesia",
          city: "Kaliurang, Yogyakarta",
          isPopular: true,
          price: "40"
        }
      ]
    },
    {
      name: "Apartment with kitchen set",
      items: [
        {
          name: "Urban Height",
          imageUrl: "cozy-havens/images/categories-9",
          country: "Indonesia",
          city: "Parangtritis, Yogyakarta",
          isPopular: false,
          price: "25"
        },
        {
          name: "Downtown Serenity",
          imageUrl: "cozy-havens/images/categories-10",
          country: "Indonesia",
          city: "Sleman, Yogyakarta",
          isPopular: false,
          price: "50"
        },
        {
          name: "Green Scape Apartment",
          imageUrl: "cozy-havens/images/categories-11",
          country: "Indonesia",
          city: "Kaliurang, Yogyakarta",
          isPopular: true,
          price: "35"
        },
        {
          name: "Classic Charm",
          imageUrl: "cozy-havens/images/categories-12",
          country: "Indonesia",
          city: "Malioboro, Yogyakarta",
          isPopular: false,
          price: "30"
        }
      ]
    }    
  ];

  try {
    await MostPicked.deleteMany({});
    await Category.deleteMany({});

    await MostPicked.insertMany(mostPicked);
    await Category.insertMany(categories);
  } catch (error) {
    console.log("Terjadi kesalahan saat menyimpan data:", error)
  } finally {
    mongoose.connection.close();
    console.log("Data berhasil disimpan");
  }
}

seed();

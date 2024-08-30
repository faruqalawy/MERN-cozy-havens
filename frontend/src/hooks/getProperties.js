import { useEffect, useState } from "react";
import axios from "axios";

// Hook untuk mendapatkan properti dari kategori
export function useCategoriesProperties(propertyName) {
  const [categoriesProperty, setCategoriesProperty] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          "https://mern-cozy-havens-backend.vercel.app/categories"
        );
        const categories = response.data;

        const foundProperty = categories
          .flatMap((category) => category.items)
          .find((item) => item.name === propertyName);
        if (foundProperty) {
          setCategoriesProperty(foundProperty);
        }
      } catch (err) {
        setError(err);
      }
    };
    getCategories();
  }, [propertyName]);

  return { categoriesProperty, error };
}

// Hook untuk mendapatkan properti dari mostPicked
export function useMostPickedProperties(propertyName) {
  const [mostPickedProperty, setMostPickedProperty] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMostPicked = async () => {
      try {
        const response = await axios.get(
          "https://mern-cozy-havens-backend.vercel.app/mostPicked"
        );
        const mostPicked = response.data;

        const property = mostPicked.find((item) => item.name === propertyName);
        setMostPickedProperty(property);
      } catch (err) {
        setError(err);
      }
    };
    getMostPicked();
  }, [propertyName]);

  return { mostPickedProperty, error };
}

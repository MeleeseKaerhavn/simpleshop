"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      // den tomme array kurven består af fra start


       //tilføj items
      addToCart: (product) => {
        const cart = get().cartItems;
        const exists = cart.find((i) => i.id === product.id);

        if (!exists) {
          set({
            cartItems: [
              ...cart,
              { ...product, quantity: 1 }
            ]
          });
        } else {
          //hvis product allerede findes, øg quantity
          set({
            cartItems: cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          });
        }
      },

        //fjern producter
      removeFromCart: (id) =>
        set({
          cartItems: get().cartItems.filter((item) => item.id !== id)
        }),

      //ændr quantity based on delta (+1 or -1)
      updateQuantity: (id, delta) =>
        set({
          cartItems: get()
            .cartItems.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + delta }
                : item
            )
            .filter((item) => item.quantity > 0)
        }),

      clearCart: () => set({ cartItems: [] }),
    }),
    {
      name: "cart-storage", // key in localStorage
    }
  )
);

export default useCartStore;

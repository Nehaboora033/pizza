import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
const STORAGE_KEY = "cart";

/** Safe read from localStorage (works even if JSON is invalid) */
const readCartFromStorage = () => {
    try {
        if (typeof window === "undefined") return [];
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
};

export const CartProvider = ({ children }) => {
    // ✅ Hydrate synchronously on first render
    const [cartItems, setCartItems] = useState(() => readCartFromStorage());

    // ✅ Persist on every change
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
        } catch {
            /* ignore write errors */
        }
    }, [cartItems]);

    // (Optional) sync across tabs
    useEffect(() => {
        const onStorage = (e) => {
            if (e.key === STORAGE_KEY) {
                setCartItems(readCartFromStorage());
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    // Add, prevent duplicates by title (keeps your current keying)
    const addToCart = (item) => {
        setCartItems((prev) => {
            if (prev.some((x) => x.title === item.title)) return prev;
            return [...prev, item];
        });
    };

    const removeFromCart = (titleOrId) => {
        setCartItems((prev) =>
            prev.filter(
                (it) => it.title !== titleOrId && it.id !== titleOrId // supports either
            )
        );
    };

    const updateItem = (title, updates) => {
        setCartItems((prev) =>
            prev.map((it) =>
                it.title === title
                    ? {
                        ...it,
                        ...updates,
                        // keep toppings array always defined
                        customizations:
                            updates.customizations ?? it.customizations ?? [],
                    }
                    : it
            )
        );
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateItem, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
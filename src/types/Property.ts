// types/Property.ts
export interface Property {
    id: string;
    type: "hotel" | "apartment" | "studio" | "house";
    name: string;
    description: string;
    images: string[];
    features: {
      pool?: boolean;
      wifi?: boolean;
      restaurant?: boolean;
      kitchen?: boolean;
      balcony?: boolean;
      electricity?: boolean;
      water?: boolean;
    };
    price: number;
    location: string;
    ownerId: string;
  }
  
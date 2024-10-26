// userInfo data
import { TaxiPackages } from "@/utils/data/index";

export const userInfo = {
    profileImage: "/path/to/profile.jpg",
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Experienced taxi driver with over 10 years on the road.",
    taxiNumber: "TX-12345",
    workingArea: "Downtown and Airport Area",
    hasBillboard: true,
    taxiSpec: "Toyota Prius 2015, Yellow Taxi",  // Changed from taxiSpecification
    status: "active", // or pending
    pkgDrInvolvedIn: [TaxiPackages[0], TaxiPackages[3]],
};

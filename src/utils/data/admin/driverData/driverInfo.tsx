import { availableDates } from "../availabelsDates";

availableDates
export const DriversData = [
    {
        id: 1,
        status: "active",
        workingArea: "Downtown",
        taxiSpecification: {
            make: "Toyota",
            model: "Camry",
            year: 2021,
            color: "Blue"
        },
        taxiNumber: "TX1234",
        assignedPackageId: 101,
        BookedDate: null,
    },
    {
        id: 2,
        status: "active",
        workingArea: "Airport",
        taxiSpecification: {
            make: "Honda",
            model: "Accord",
            year: 2020,
            color: "Black"
        },
        taxiNumber: "TX5678",
        assignedPackageId: 102,
        BookedDate: null,
    },
    {
        id: 3,
        status: "pending",
        workingArea: "Uptown",
        taxiSpecification: {
            make: "Ford",
            model: "Fusion",
            year: 2019,
            color: "White"
        },
        taxiNumber: "TX9101",
        assignedPackageId: null,
        BookedDate: availableDates[4],
    },
    {
        id: 4,
        status: "active",
        workingArea: "Suburbs",
        taxiSpecification: {
            make: "Chevrolet",
            model: "Malibu",
            year: 2022,
            color: "Red"
        },
        taxiNumber: "TX1213",
        assignedPackageId: 103,
        BookedDate: null,
    },
    {
        id: 5,
        status: "pending",
        workingArea: "City Center",
        taxiSpecification: {
            make: "Nissan",
            model: "Altima",
            year: 2020,
            color: "Gray"
        },
        taxiNumber: "TX1415",
        assignedPackageId: null,
        BookedDate: availableDates[4],
    },
    {
        id: 6,
        status: "active",
        workingArea: "Beach Area",
        taxiSpecification: {
            make: "Hyundai",
            model: "Sonata",
            year: 2021,
            color: "Silver"
        },
        taxiNumber: "TX1617",
        assignedPackageId: 104,
        BookedDate: null,
    }
];

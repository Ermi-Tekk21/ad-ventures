import { BiboardPackages } from "@/utils/data/index";


export const BillboardsData = [
    {
        id: 1,
        location: "Downtown Square",
        screenSize: "1920x1080",
        packageAssignedId: BiboardPackages[2],
        status: "active"
    },
    {
        id: 2,
        location: "City Mall Entrance",
        screenSize: "2560x1440",
        packageAssignedId: BiboardPackages[4],
        status: "active"
    },
    {
        id: 3,
        location: "Airport Terminal 3",
        screenSize: "3840x2160",
        packageAssignedId: BiboardPackages[2],
        status: "active"
    },
    {
        id: 4,
        location: "Highway 15 North",
        screenSize: "1920x1080",
        packageAssignedId: null,
        status: "inactive"
    },
    {
        id: 5,
        location: "Stadium West Gate",
        screenSize: "2560x1440",
        packageAssignedId: null,
        status: "inactive"
    },
    {
        id: 6,
        location: "Main Street Plaza",
        screenSize: "1920x1080",
        packageAssignedId: BiboardPackages[1],
        status: "active"
    },
    {
        id: 7,
        location: "Tech Park Center",
        screenSize: "3440x1440",
        packageAssignedId: "PKG005",
        status: "active"
    },
    {
        id: 8,
        location: "University Library Entrance",
        screenSize: "1280x720",
        packageAssignedId: null,
        status: "inactive"
    },
    {
        id: 9,
        location: "Train Station Platform B",
        screenSize: "1920x1080",
        packageAssignedId: BiboardPackages[0],
        status: "active"
    },
    {
        id: 10,
        location: "City Hall Entrance",
        screenSize: "2560x1440",
        packageAssignedId: null,
        status: "inactive"
    }
];

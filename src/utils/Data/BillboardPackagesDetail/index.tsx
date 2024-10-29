import { BillboardsData } from "@/utils/Data/BillboardsData/index";

export const BillboardPackages = [
    {
      id: "BP001",
      type: "BBbasic",
      impressions: 5000,
      placement: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP001").length,
      billboardAssigned: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP001"),
      pricePerMonth: 50
    },
    {
      id: "BP002",
      type: "BBstandard",
      impressions: 15000,
      placement: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP002").length,
      billboardAssigned: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP002"),
      pricePerMonth: 100
    },
    {
      id: "BP003",
      type: "BBpremium",
      impressions: 30000,
      placement: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP003").length,
      billboardAssigned: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP003"),
      pricePerMonth: 200
    },
    {
      id: "BP004",
      type: "BBpro",
      impressions: 50000,
      placement: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP004").length,
      billboardAssigned: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP004"),
      pricePerMonth: 300
    },
    {
      id: "BP005",
      type: "BBenterprise",
      impressions: 100000,
      placement: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP005").length,
      billboardAssigned: BillboardsData.filter(Billboard => Billboard.packageAssignedId === "BP005"),
      pricePerMonth: 500
    }
  ];
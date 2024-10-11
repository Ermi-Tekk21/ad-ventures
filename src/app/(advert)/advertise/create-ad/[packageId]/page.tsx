import { Button } from "@/components/ui/button";
import { packages } from "@/utils/data";

const PackageDeatils = ({ params }: {
  params: {
    packageId: string;
  };
}) => {
  const targetPkg = packages.find((pkg) => pkg.name.split(" ").join("") === params.packageId?.split("%20").join(""));

  return (
    <div className="p-8 items-center pt-20">
      <div>
      <h1 className="text-4xl font-bold dark:text-slate-50 text-slate-800 mb-2">Package Datail</h1>
      <hr className="w-1/2 border-[0.5px] border-white"/>
      </div>
      <div className="w-3/4 flex flex-col gap-2 m-auto rounded-lg border border-gray-200 shadow-md p-6 text-white opacity-80 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{targetPkg?.name}</h2>
        <hr />
        <p className="text-xl font-semibold text-blue-600 mb-4">{targetPkg?.price}</p>

        <ul className="dark:text-slate-100 text-slate-800 mb-4">
          <li className="mb-2">
            <span className="font-bold">Impressions:</span> {targetPkg?.impressions.toLocaleString()}
          </li>
          <li className="mb-2">
            <span className="font-bold">Ad Placements:</span> {targetPkg?.adPlacements}
          </li>
          <li className="">
            <span className="font-bold">Support:</span> {targetPkg?.support}
          </li>
        </ul>
        <hr />
        <p className="dark:text-slate-200 text-lg text-slate-800 mb-4">{targetPkg?.description}</p>

        <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
          Choose Plan
        </Button>
      </div>
    </div>
  );
}

export default PackageDeatils;
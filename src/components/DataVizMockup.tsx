import Image from "next/image";
import outstandingGraph from "@/images/outstanding-graph.svg"
import rateGraph from "@/images/rate-graph.svg"
import salesGraph from "@/images/sales-graph.svg"
const DataVizMockup = () => {
  return (
      <div className="absolute bg-transparent mt-2 p-4">
        <h6 className="text-sm font-semibold">Reconciliation reports</h6>
        <div className="flex space-x-16 flex-wrap mt-2">
          <div>
            <Image
                className="w-72 shadow-lg"
                src={outstandingGraph}
                alt=""
            />
          </div>
          <div className="-mt-8">
            <Image
                className="w-72 shadow-lg"
                src={rateGraph}
                alt=""
            />
          </div>
        </div>
        <div className="flex justify-end">
          <div className="-mt-4 pr-2">
            <Image
                className="w-72 shadow-lg"
                src={salesGraph}
                alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default DataVizMockup

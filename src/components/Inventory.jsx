import React from "react";
import { useQuery } from "@tanstack/react-query"
import { getInventoryData } from "../api/inventoryApi"


function Inventory() {
    const { data, error, isLoading } = useQuery({
        queryKey: ['inventoryData'],
        queryFn: getInventoryData,    
    });

    // console.log("data", data);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data</p>;

  return (
    <div>
        <h2>Inventory Data</h2>
        <ul>
            {Array.isArray(data) ? (
                data.map((row, index) => (
                    <li key={index}>{row[0]}: {row[1]}</li>
                ))
            ) : (
                <p>No data available</p>
            )}
        </ul>
    </div>
  );
}

export default Inventory;
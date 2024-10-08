"use client"
import { useState } from "react";
import { Input } from "@/components/ui/input";

const SearchInput: React.FC = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
        // You can call a search function here or filter the data based on the search query.
        console.log("Search Query: ", event.target.value);
    };

    return (
        <div>
            <Input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="bg-slate-100 text-black"
            />
        </div>
    );
}
export default SearchInput;
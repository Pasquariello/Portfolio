import { fetchSpaces } from "@/app/lib/data";
import SpacesSelect from "./spaces-select";

export default async function SpacesDropdown() {

    const spaces = await fetchSpaces();
    return (
        <div className="my-2">
            <label htmlFor="space-select" className="block text-sm font-medium text-gray-700 mb-2">
                Select Space
            </label>
            <SpacesSelect spaces={spaces} />
        </div>

    )
}
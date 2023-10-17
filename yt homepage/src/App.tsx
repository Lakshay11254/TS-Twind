import {useState} from "react";
import { PageHeader } from "./layouts/PageHeader";
import {CategoryPills} from "./components/CategoryPills";
import { categories } from "./data/home";

export default function App() {
    const [selectedCategory, setSelectedCategory] = 
    useState(categories[0])

return (
<div className="flex max-h-screen  flex-col">
 <PageHeader/>
<div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
    <div>Sidebar</div>
    <div className="sticky top-0 bg-white z-10 pb-4">
        <CategoryPills categories={categories}
        selectedCategory = {selectedCategory}
        onSelect={setSelectedCategory}/>
    </div>
    </div>
</div>

)
}

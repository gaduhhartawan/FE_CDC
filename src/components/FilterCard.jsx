export default function FilterCard() {
    return (
        <div className="rounded-sr flex flex-col items-start justify-evenly h-full bg-whitegray text-black font-plusjakarta px-8 py-3">
            <form action="#" className="flex flex-col font-medium">
                <span className="font-bold">Job Type</span>
                <label>
                    <input type="checkbox" name="myCheckbox" /> Full-Time
                </label>
                <label>
                    <input type="checkbox" name="myCheckbox" /> Internship
                </label>
                <label>
                    <input type="checkbox" name="myCheckbox" /> Contract
                </label>
            </form>
        </div>
    )
}
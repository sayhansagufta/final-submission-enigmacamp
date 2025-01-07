import { Spinner } from "@nextui-org/react";

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center h-screen bg-slate-100 bg-opacity-90 z-50">
            <Spinner size="lg" label="...loading" />
        </div>
    );
}
export default Loading
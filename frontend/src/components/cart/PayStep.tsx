interface PayStepProps {
    isActive: boolean
}


function PayStep(props: PayStepProps) {
    return (
        <>
            <div className="flex">
                <div className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Shipping</div>
                <div className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Payment</div>
                <div className="flex-1 px-4 py-2 text-center text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Complete</div>
            </div>


        </>
    )
}

export default PayStep;
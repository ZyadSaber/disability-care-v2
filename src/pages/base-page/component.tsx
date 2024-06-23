import { memo } from "react";
import { logo } from "../../images"

const BasePage = memo(() => (
    <div className="h-screen flex flex-col justify-center items-center gap-5 bg-gray-200">
        <img src={logo} alt="logo" className="h-2/6" />
        <h3 className="text-4xl text-blue-800 font-bold">Coming soon</h3>
        <div className="text-center font-light">
            <p>MAX CARE Transportation LLC</p>
            <p>(904) 646-8698</p>
            <p>maxcarellc@outlook.com</p>
            <p>http://www.maxcaretransport.com</p>
            <p>103 Century 21 Dr Suite 100 Unit 3, Jacksonville, FL 32216</p>
        </div>
    </div>
))

export default BasePage
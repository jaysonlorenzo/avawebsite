import React from "react";
import PropTypes from "prop-types";

export default function CardTable({ color }) {
  return (
    <>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap mt-4">
                <div className="w-full mb-12 px-4">
                    <div
                        className={
                        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded pt-10 " +
                        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
                        }
                    >
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                "font-semibold text-lg " +
                                (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Card Tables
                            </h3>
                            </div>
                        </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Project
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Budget
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Status
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Users
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                ></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span
                                    className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                    }
                                >
                                    Argon Design System
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $2,500 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-orange-500 mr-2"></i> pending
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                            
                            
                                </td>

                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                                <span
                                    className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                    }
                                >
                                    Angular Now UI Kit PRO
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $1,800 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                                completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                
                                </td>


                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                                <span
                                    className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                    }
                                >
                                    Black Dashboard Sketch
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $3,150 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-red-500 mr-2"></i> delayed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                </td>

                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                                <span
                                    className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                    }
                                >
                                    React Material Dashboard
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $4,400 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-teal-500 mr-2"></i> on
                                schedule
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">

                                </td>


                            </tr>
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">

                                <span
                                    className={
                                    "ml-3 font-bold " +
                                    +(color === "light" ? "text-blueGray-600" : "text-white")
                                    }
                                >
                                    React Material Dashboard
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $2,200 USD
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-emerald-500 mr-2"></i>{" "}
                                completed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                
                                </td>

                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

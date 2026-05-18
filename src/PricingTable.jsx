import React from "react";
import "./PricingTable.css";

const data = [
  {
    feature: "Monthly Price",
    GETFIT: "₹999",
    branded: "₹3999",
    local: "₹1999",
    type: "price",
  },
  {
    feature: "Premium Equipments",
    GETFIT: true,
    branded: true,
    local: false,
  },
  {
    feature: "Personalized Plans",
    GETFIT: true,
    branded: true,
    local: false,
  },
  {
    feature: "Techdriven Workouts",
    GETFIT: true,
    branded: false,
    local: false,
  },
  {
    feature: "1-On-1 Expert Consultation",
    GETFIT: true,
    branded: false,
    local: false,
  },
  {
    feature: "Group Classes",
    GETFIT: true,
    branded: false,
    local: false,
  },
  {
    feature: "zumba",
    GETFIT: true,
    branded: true,
    local: false,
  },
];

const renderIcon = (value) => {
  if (value === true)
    return (
      <span className="pricing-check">
        ✔
      </span>
    );

  if (value === false)
    return (
      <span className="pricing-cross">
        ✖
      </span>
    );

  return value;
};

const PricingTable = () => {

  return (

    <div className="pricing-table-container">

      <table className="pricing-main-table">

        <thead>

          <tr>

            <th></th>

            <th className="pricing-highlight">
              GETFIT Gym’s
            </th>

            <th>
              Branded Gym’s
            </th>

            <th>
              Local Gyms
            </th>

          </tr>

        </thead>

        <tbody>

          {data.map((row, index) => (

            <tr key={index}>

              <td className="pricing-feature">
                {row.feature}
              </td>

              <td>
                {renderIcon(
                  row.GETFIT
                )}
              </td>

              <td>
                {renderIcon(
                  row.branded
                )}
              </td>

              <td>
                {renderIcon(
                  row.local
                )}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default PricingTable;
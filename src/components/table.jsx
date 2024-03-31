import React, { useState } from "react";

const DataTable = ({ data, onGoBack }) => {
  const [tablesStack, setTablesStack] = useState([]);

  const handleToggleNestedTable = (nestedData) => {
    setTablesStack([...tablesStack, nestedData]);
  };

  const handleGoBack = () => {
    setTablesStack(tablesStack.slice(0, -1));
  };

  const currentTableData =
    tablesStack.length > 0 ? tablesStack[tablesStack.length - 1] : data;

  return (
    <div>
      {tablesStack.length === 0 ? (
        <>
          {onGoBack && (
            <button className="nested-btn" onClick={onGoBack}>
              Go Back
            </button>
          )}
          <table className="data-table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
                <th colSpan={2} style={{ textAlign: "center " }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  {Object.keys(item).map((key) => (
                    <td key={key}>
                      {Array.isArray(item[key]) ? (
                        <button
                          className="nested-btn"
                          onClick={() => handleToggleNestedTable(item[key])}
                        >
                          View Array
                        </button>
                      ) : (
                        item[key]
                      )}
                    </td>
                  ))}
                  <td>
                    <button className="nested-btn">Add</button>

                    <button className="nested-btn">update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <DataTable data={currentTableData} onGoBack={handleGoBack} />
      )}
    </div>
  );
};

export default DataTable;

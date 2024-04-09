import React from 'react';
import { createColumnHelper } from '@tanstack/react-table';
import { DatasetDictionaryItemType } from '../../types/dataset';
import DataDictionaryTable from '../DataDictionaryTable';
import { Tooltip, TooltipIcon } from '@cmsgov/design-system';
import "./datadictionary.scss"

const DatasetDictionaryTable = ({ datasetDictionary, pageSize} : {datasetDictionary: DatasetDictionaryItemType[], pageSize: number}) => {
  const tableData = datasetDictionary.map((item) => {
    return {
      titleResizable: item.title,
      description: item.description,
      type: item.type
    }
  })

  const columnHelper = createColumnHelper<DatasetDictionaryItemType>()
  const tableColumns = [
    columnHelper.accessor('titleResizable', {
      header: () => (
        <div className="dc-c-tooltip-width-override">
          Title
          <Tooltip
            title={"Title is the human readable text that will be displayed in the data preview on the dataset page. (e.g., Change_Type)"}
            // @ts-ignore
            style={{ border: 'none', background: 'none' }}
            maxWidth="500px"
          >
            <TooltipIcon />
          </Tooltip>
        </div>
      ),
      size: 300
    }),
    columnHelper.accessor('description', {
      header: 'Description',
      minSize: 600,
    }),
    columnHelper.accessor('type', {
      header: 'Type',
      size: 150,
      enableResizing: false
    }),
  ];

  return ( <DataDictionaryTable tableColumns={tableColumns} tableData={tableData} count={datasetDictionary.length} pageSize={pageSize} /> )
}

export default DatasetDictionaryTable;
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@cmsgov/design-system';

const DataTableRowChanger = ({ setLimit, rowOptions, limit }) => {
  return (
    <div>
      <span className="ds-u-margin-right--2">Rows per page:</span>
      {rowOptions.map((r) => (
        <Button
          key={`buttonFor${r}`}
          onClick={() => setLimit(r)}
          size="small"
          variation="transparent"
          className={`${
            limit === r ? 'ds-u-font-weight--bold ds-u-border-bottom--2' : ''
          } ds-u-text-decoration--none ds-u-padding--0 ds-u-margin-right--1`}
        >
          {r} <span className="ds-u-visibility--screen-reader">rows per page</span>
        </Button>
      ))}
    </div>
  );
};

DataTableRowChanger.defaultProps = {
  rowOptions: [10, 25, 50, 100],
};

DataTableRowChanger.propTypes = {
  rowOptions: PropTypes.arrayOf(PropTypes.number),
  setLimit: PropTypes.func.isRequired,
};

export default DataTableRowChanger;

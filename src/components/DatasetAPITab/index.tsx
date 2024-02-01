
import React from 'react';
import ApiDocumentation from "../ApiDocumentation";
type DatasetAPIProps = {
  id: String;
  rootUrl: String;
  apiUrl: string;
};

const DatasetAPI = ({ id, rootUrl, apiUrl }: DatasetAPIProps) => {
  return (
    <>
      <div className="ds-u-display--flex ds-u-flex-wrap--wrap">
        <div className="ds-l-col--12 ds-l-md-col--9 ds-u-padding-left--0">
          <h2 className="ds-text-heading--2xl">Try the API</h2>
          <p>
            The Open Data API (ODA) provides programmatic access to this dataset including the
            ability to filter, query, and aggregate data.
          </p>
        </div>
        <div className="ds-l-col--12 ds-l-md-col--3 ds-u-font-weight--bold ds-u-margin-top--2 ds-u-padding-left--0 ds-u-md-padding-left--2">
          <a href={apiUrl}>
            View API{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              specification <i className="fa fa-arrow-right ds-u-font-weight--bold"></i>
            </span>
          </a>
        </div>
      </div>
      <ApiDocumentation
        endpoint={`${rootUrl}/metastore/schemas/dataset/items/${id}/docs`}
      />
    </>
  );
};

export default DatasetAPI;
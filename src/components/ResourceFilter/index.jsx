import React from 'react';
import qs from 'qs';
import { Button, HelpDrawer } from '@cmsgov/design-system';
import ResourceConditionField from '../ResourceConditionField';

const ResourceFilter = ({id, filterOpen, setFilterOpen, defaultCondition, resource, includeSearchParams}) => {
  const {
    setConditions,
    schema,
    conditions,
    // searchParams
  } = resource;

  const [formConditions, setFormConditions] = React.useState(conditions && conditions.length ? conditions : [{...defaultCondition}]);
  React.useEffect(() => {
    if(includeSearchParams) {
      const url = new URL(window.location);
      const urlString = qs.stringify({conditions: conditions}, {encodeValuesOnly: true, addQueryPrefix: true })
      window.history.pushState({}, '', `${url.origin}${url.pathname}${urlString}`);
    }
  }, [conditions])


  function removeByIndex(index) {
    let newConditions = [...formConditions]
    newConditions.splice(index, 1)
    setFormConditions(newConditions)
    setConditions(newConditions)
  }

  function updateByIndex(index, key, value) {
    let newConditions = [...formConditions]
    newConditions[index][key] = value
    setFormConditions(newConditions)
  }

  function submitFilters(e) {
    e.preventDefault();
    if(formConditions.length) {
      const updatedConditions = formConditions.map((cond) => {
        if(cond.operator.toLowerCase() === 'like') {
          cond.value = `%${cond.value}%`;
        }
        return cond
      })
      console.log(updatedConditions)
      setConditions(updatedConditions);
    }
  }
  return(
    <HelpDrawer
      // footerTitle="Footer Title"
      footerBody={
        <Button
          className="ds-u-margin-right--1"
          onClick={(e) => submitFilters(e, formConditions)}
        >
          Update table
        </Button>
      }
      heading="Add filters"
      onCloseClick={() => {setFilterOpen(!filterOpen);}}
    >
      <form onSubmit={(e) => submitFilters(e, formConditions)}>
        {Object.keys(schema).length
          && (
            formConditions.map((f, index) => (
              <ResourceConditionField
                key={index}
                data={f}
                index={index}
                remove={removeByIndex}
                schema={schema[id]}
                update={updateByIndex}
              />
            ))
          )
        }
        <Button
          className="ds-u-margin-right--1"
          variation="transparent"
          onClick={(e) => {
            e.preventDefault();
            setFormConditions([...formConditions, {...defaultCondition}])
          }}
        >
          + Add another filter
        </Button>
      </form>
    </HelpDrawer>
  );
};

ResourceFilter.defaultProps = {
  defaultCondition: {
    resource: 't',
    property: '',
    value: '',
    operator: ''
  },
  includeSearchParams: true,
}

export default ResourceFilter;

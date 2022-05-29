import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const OperationList: React.FC = () => {
  const {operations, loading, error} = useTypedSelector(state => state.operation)
  const {fetchOperations} = useActions()
  useEffect(() => {
    fetchOperations()
  }, [])
  if (loading) {
    return <h1>Идет загрузка...</h1>
  }
  if (error) {
    return <h1>{error}</h1>
  }
  return (
    <div>
      {operations.map(operation =>
        <div key={operation.id}>{operation.value}</div>
      )}
    </div>
  );
};

export default OperationList;
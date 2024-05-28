const Table = ({ children, thead, ...props }) => {
  return (
    <>
      {children.length && (
        <table {...props}>
          <thead>{thead}</thead>
          <tbody>{children}</tbody>
        </table>
      )}

      {!children.length && <div className="empty-table"> No data matching</div>}
    </>
  );
};

export default Table;


function Header({ changeRoom }) {
  return (
    <nav>
      <ul className="flex gap-4 cursor-pointer">
        <li onClick={() => changeRoom("Home")}>Home</li>
        <li onClick={() => changeRoom("Castle")}>Castle</li>
        
      </ul>
    </nav>
  );
}


export default Header;
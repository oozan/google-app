import HeaderOption from "./HeaderOption";

function HeaderOptions () {
  return (
    <div>
        <div>
            <HeaderOption />
        </div>

      <div className="flex space-x-4">
        <p ClassName="link">Settings</p>
        <p ClassName="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
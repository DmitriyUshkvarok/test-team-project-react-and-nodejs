const ProfileModal = () => {
  return (
    <div>
      <p>Add pet</p>

      <form>
        <label>
          <p>Name pet</p>
          <input type="text" placeholder="Type name pet" />
        </label>
        <label>
          <p>Date of birth</p>
          <input type="text" placeholder="Type date of birth" />
        </label>
        <label>
          <p>Breed</p>
          <input type="text" placeholder="Type breed" />
        </label>
      </form>
    </div>
  );
};

export default ProfileModal;

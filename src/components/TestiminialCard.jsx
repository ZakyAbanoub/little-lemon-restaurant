const TestiminialCard = () => {
  return (
    <div className="bg-white p-3">
      <div>Rating</div>
      <div className="flex items-center">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg"
          alt="user review"
          className="w-[50px]  bg-slate-400"
        />
        <p>Name</p>
      </div>
      <div className="review_test">Review Test</div>
    </div>
  );
};

export default TestiminialCard;

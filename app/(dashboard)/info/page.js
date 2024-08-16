const InfoPage = () => {
  return (
    <div>
      <div className="-mt-6 text-3xl font-bold">
        "I sacrifice" - Griffith (later called Femto)
      </div>
      <div className="my-8 text-4xl font-extrabold underline">
        Who is Femto/Griffith?
      </div>
      <div className="mb-8 flex flex-row-reverse">
        <img
          src="https://static.wikia.nocookie.net/pure-evil-wiki/images/f/fd/Femto_render.webp"
          className="max-w-sm rounded-lg shadow-2xl drop-shadow-2xl shadow-violet-900"
        />
        <p className="text-2xl">
          Griffith, later known as Femto, is the main antagonist of the Berserk
          franchise. He is the founder and leader of the mercenary band known as
          the Band of the Hawk. As a mercenary, Griffith fought in the Hundred
          Year War, restored peace to the war-torn kingdom of Midland, and was
          once a close friend and ally of Guts. After being tortured, however,
          he used the Eclipse to sacrifice his entire band and was later reborn
          as Femto, the fifth and final member of the God Hand. He is the
          arch-nemesis of Guts and Casca.
        </p>
      </div>
      <div className="flex flex-row justify-around">
        <div>
          <img
            src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/12/Griffith-stare.jpg"
            className="max-w-md rounded-lg shadow-2xl drop-shadow-2xl shadow-blue-400"
          />
        </div>
        <div>
          <img
            src="https://static.wikia.nocookie.net/pure-evil-wiki/images/5/54/Griffith_Card.webp"
            className="max-w-sm rounded-lg shadow-2xl drop-shadow-2xl shadow-blue-200"
          />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/736x/ac/86/97/ac8697b50507f6c009b3fce0f4119d3c.jpg"
            className="max-w-sm max-h-64 rounded-lg shadow-2xl drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default InfoPage;

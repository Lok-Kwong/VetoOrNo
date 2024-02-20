import Trade from "@/components/Trade";

export default function Home() {
  return (
    <>
      <div className='container'>
        <h2 className='title'> Who won the trade? </h2>

        <div className='tradeFeed'>
          <Trade>

          </Trade>
        </div>

      </div>
    </>
  );
}

import React from 'react';

type State = {
  timeRemainingInSeconds: number;
  countdownComplete: boolean;
};
type Props = {
  startTimeInSeconds: number;
};
class Clock extends React.Component<Props, State> {
  private timer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      timeRemainingInSeconds: props.startTimeInSeconds,
      countdownComplete: false,
    };
  }

  decrementTimeRemaining = () => {
    if (this.state.timeRemainingInSeconds > 0) {
      this.setState({
        timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1,
      });
    } else {
      this.setState({ countdownComplete: true });
      clearInterval(this.timer!);
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.decrementTimeRemaining();
    }, 1000);
  }

  render() {
    return (
      <>
        {this.state.countdownComplete ? (
          <div>
            <p>Countdown Complete</p>
          </div>
        ) : (
          <div className='countdown-timer'>
            <div className='countdown-timer__circle'>
              <svg>
                <circle
                  r='24'
                  cx='26'
                  cy='26'
                  style={{
                    animation: `countdown-animation ${this.props.startTimeInSeconds}s linear`,
                  }}
                />
              </svg>
            </div>
            <div className='countdown-timer__text'>
              {this.state.timeRemainingInSeconds}s
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Clock;

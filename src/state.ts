/**
 * State interface for the greeting agent.
 */
export interface GreetingState {
  /**
   * The input name to greet
   */
  name: string;
  
  /**
   * The output greeting message
   */
  greeting: string;
}
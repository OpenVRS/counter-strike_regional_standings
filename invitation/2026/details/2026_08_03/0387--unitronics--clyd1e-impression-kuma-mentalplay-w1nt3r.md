### Roster Details<br />
Team Name: Unitronics<br />
Roster: clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r<br />
Global Rank: [387](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [46]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  432.6<br />
<br />
Final Rank Value (432.6) = Starting Rank Value (432.4) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.017<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 432.4
- 400 + ( ( 0.017 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 432.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2317 | 2026-05-01 | BORING PLAYERS | L   | 0.577      | -            | -                | -                | -         |    -3.70 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            4 |     2369 | 2026-04-30 | 5star          | L   | 0.570      | -            | -                | -                | -         |    -0.77 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            3 |     2411 | 2026-04-30 | Legion         | W   | 0.564      | 0.471        | 0.000 (0.000)    | 0.048 (0.013)    | 1 (0.564) |    11.25 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            2 |     3803 | 2026-03-28 | XDM            | L   | 0.350      | -            | -                | -                | -         |    -4.74 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |
|            1 |     3884 | 2026-03-27 | Just Swing     | L   | 0.344      | -            | -                | -                | -         |    -1.85 | clyd1e, ImpressioN, Kuma, mENTALPLAY, w1nt3r |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

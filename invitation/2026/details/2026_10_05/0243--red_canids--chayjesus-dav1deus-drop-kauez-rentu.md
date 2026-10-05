### Roster Details<br />
Team Name: RED Canids<br />
Roster: chayJESUS, dav1deuS, drop, kauez, reNTU<br />
Global Rank: [243](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [53]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  653.0<br />
<br />
Final Rank Value (653.0) = Starting Rank Value (655.6) + Head To Head Adjustments (-2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.004[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.6
- 400 + ( ( 0.128 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 655.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5097 | 2026-04-27 | GameHunters  | L   | 0.128      | -            | -                | -                | -         |    -2.90 | chayJESUS, dav1deuS, drop, kauez, reNTU |
|            4 |     5149 | 2026-04-26 | Yawara       | L   | 0.121      | -            | -                | -                | -         |    -0.89 | chayJESUS, dav1deuS, drop, kauez, reNTU |
|            3 |     5487 | 2026-04-15 | Spirit       | L   | 0.047      | -            | -                | -                | -         |    -0.00 | chayJESUS, dav1deuS, drop, kauez, reNTU |
|            2 |     5508 | 2026-04-14 | Iberian Soul | W   | 0.040      | 1.000        | 0.073 (0.003)    | 0.447 (0.018)    | 1 (0.040) |     1.21 | chayJESUS, dav1deuS, drop, kauez, reNTU |
|            1 |     5527 | 2026-04-13 | Vitality     | L   | 0.033      | -            | -                | -                | -         |    -0.00 | chayJESUS, dav1deuS, drop, kauez, reNTU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,488.94)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.074 | $20,000.00     | $1,488.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />

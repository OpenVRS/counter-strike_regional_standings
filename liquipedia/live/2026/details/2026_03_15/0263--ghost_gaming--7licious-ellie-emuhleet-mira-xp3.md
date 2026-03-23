### Roster Details<br />
Team Name: Ghost Gaming<br />
Roster: 7licious, Ellie, EMUHLEET, mira, Xp3<br />
Global Rank: [263](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [65]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  598.7<br />
<br />
Final Rank Value (598.7) = Starting Rank Value (614.4) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.4
- 400 + ( ( 0.110 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 614.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.045
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2796 | 2025-12-09 | Straight2Killin      | L   | 0.562      | -            | -                | -                | -         |   -11.34 | Ellie, EMUHLEET, kevin, mira, Xp3          |
|           13 |     2838 | 2025-12-07 | Regain               | L   | 0.548      | -            | -                | -                | -         |    -7.36 | Ellie, EMUHLEET, kevin, mira, Xp3          |
|           12 |     2907 | 2025-12-04 | Lotus                | W   | 0.528      | 0.333        | 0.001 (0.000)    | 0.015 (0.003)    | 0 (0.000) |     8.01 | Ellie, EMUHLEET, kevin, mira, Xp3          |
|           11 |     2937 | 2025-12-03 | Outfit 49            | L   | 0.522      | -            | -                | -                | -         |    -6.55 | Ellie, EMUHLEET, kevin, mira, Xp3          |
|           10 |     3870 | 2025-11-01 | Marsborne            | L   | 0.306      | -            | -                | -                | -         |    -0.24 | 7licious, Ellie, EMUHLEET, mira, Xp3       |
|            9 |     4038 | 2025-10-26 | BOSS                 | L   | 0.268      | -            | -                | -                | -         |    -2.50 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            8 |     4095 | 2025-10-25 | Wanted Goons         | W   | 0.261      | 0.363        | 0.000 (0.000)    | 0.026 (0.002)    | 0 (0.000) |     2.52 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            7 |     4153 | 2025-10-24 | Ex-Nocturnal Esports | W   | 0.254      | 0.520        | 0.001 (0.000)    | 0.014 (0.002)    | 0 (0.000) |     3.77 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            6 |     4210 | 2025-10-23 | Regain               | L   | 0.248      | -            | -                | -                | -         |    -3.18 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            5 |     4410 | 2025-10-15 | Lotus                | L   | 0.194      | -            | -                | -                | -         |    -3.21 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            4 |     4624 | 2025-10-08 | Black mold           | W   | 0.147      | 0.520        | 0.001 (0.000)    | 0.015 (0.001)    | 0 (0.000) |     2.21 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            3 |     4931 | 2025-10-02 | Wwaves               | W   | 0.108      | 0.520        | 0.001 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.59 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            2 |     5232 | 2025-09-25 | The Little Bocks     | W   | 0.061      | 0.520        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.70 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |
|            1 |     5425 | 2025-09-18 | Sakura Esports       | L   | 0.015      | -            | -                | -                | -         |    -0.13 | 7licious, Ellie, EMUHLEET, mira, PiggyKiki |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($483.44)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-24 |      0.254 | $1,900.00      | $483.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
